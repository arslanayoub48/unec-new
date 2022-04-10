<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;
    protected $table = "menus";

   
    public static function has_children($rows,$id) {
        foreach ($rows as $row) {
          if ($row['parent_id'] == $id)
            return true;
        }
        return false;
      }
      public static function  build_menu($rows,$parent=0)
      {  
        $parentclass = $parent != 0 ?"has-parent": '';
        $result = '<ul role="menu" class="submenu menu_59 '.$parentclass.'  first-child child-0 menu-item-id-69 menu-item-parent-59" >';
        foreach ($rows as $row)
        {        
          if ($row['parent_id'] == $parent){
            $result.= '<li role="menuitem" class="has-submenu    depth-0" data-item-id="58">
            <a itemprop="url" data-item-id="58" class="menu_element_link   first-child child-0 menu-item-id-58 menu-item-parent-1 depth-0  " href="'.$row["link"].'">'.$row['name'].'</a>';
            if (Menu::has_children($rows,$row['id']))
              $result.= Menu::build_menu($rows,$row['id']);
            $result.= "</li>";
          }
        }
        $result.= "</ul>";
      
        return $result;
      }
     

   
     
}
