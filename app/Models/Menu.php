<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;

    protected $table = "menus";
    protected $fillable = ['title', 'location', 'content', 'created_at', 'updated_at', 'locale'];

    public static function tree($location)
    {
        $menu = Menu::where('loc', $location)->where("locale", Wlang::getCurrent())->first();
        if (!$menu) return false;
        $content = $menu->content;
        $content = json_decode($content);
        $result = '<ul role="menu" class="submenu menu_59  first-child child-0 menu-item-id-69 menu-item-parent-59" >';
        if (is_array($content)) {
            foreach ($content[0] as $item) {
                $id = $item->id;
                $item_menu = Menu::id($id);
                $result .= '<li role="menuitem" class="has-submenu    depth-0" data-item-id="58">
            <a itemprop="url" data-item-id="58" class="menu_element_link   first-child child-0 menu-item-id-58 menu-item-parent-1 depth-0  " href="' . $item_menu->slug . '">' . $item_menu->title . '</a>';
                if (isset($item->children)) {
                    $result .= '<ul role="menu" class="submenu menu_59 has-parent  first-child child-0 menu-item-id-69 menu-item-parent-59" >';
                    foreach ($item->children[0] as $child) {
                        $children = Menu::id($child->id);
                        $result .= '<li role="menuitem" class="has-submenu    depth-0" data-item-id="58">
                  <a itemprop="url" data-item-id="58" class="menu_element_link   first-child child-0 menu-item-id-58 menu-item-parent-1 depth-0  " href="' . $children->slug . '">' . $children->title . '</a>';
                        $result .= "</li>";
                    }
                    $result .= "</ul>";
                }
                $result .= "</li>";
            }
        }
        $result .= "</ul>";
        return $result;
    }

    public static function id($id)
    {
        return menuitem::find($id);
    }

    public function newQuery()
    {
        return parent::newQuery()->where("locale", Wlang::getCurrent());
    }

    public static function create(array $attributes = [])
    {
        $attributes["locale"] = Wlang::getCurrent();
        $model = static::query()->create($attributes);

        // ...

        return $model;
    }

    public static function treeTop($location)
    {
        $menu = Menu::where('loc', $location)->where("locale", Wlang::getCurrent())->first();
        if (!$menu) return false;
        $content = $menu->content;
        $content = json_decode($content);
        $result = '<ul class="navbar-nav" style="flex-direction: row;">';
        if (is_array($content)) {
            foreach ($content[0] as $item) {
                $id = $item->id;
                $item_menu = Menu::id($id);
                $result .= '<li class="menu-toggled nav-item">
            <a class="nav-link" href="' . $item_menu->slug . '">' . $item_menu->title . '</a>';
                if (isset($item->children)) {
                    $result .= ' <div class="menu-content" style="width: 620px;">
                                <div class="row" >
                                    <div class="col" >
                                        <ul class="row" >';
                    foreach ($item->children[0] as $child) {
                        $children = Menu::id($child->id);
                        $result .= '<li  class="col-lg-4" > <a href="' . $children->slug . '">' . $children->title . '</a>';
                        $result .= "</li>";
                    }
                    $result .= "</ul></div></div></div>";
                }
                $result .= "</li>";
            }
        }
        $result .= "</ul>";
        return $result;
    }

    public static function treeMain($location)
    {
        $menu = Menu::where('loc', $location)->where("locale", Wlang::getCurrent())->first();

        if (!$menu) return false;
        $content = $menu->content;
        $content = json_decode($content);
        $result = '<ul class="navbar-nav text-uppercase">';
        if (is_array($content)) {
            foreach ($content[0] as $item) {
                $id = $item->id;
                $item_menu = Menu::id($id);
                $result .= ' <li class="menu-toggled nav-item">
            <a class="nav-link" href="' . $item_menu->slug . '">' . $item_menu->title . '</a> ';

                if (isset($item->children)) {

                    $result .= '<div class="menu-content">
                                    <div class="row"><div class="col">
                                            <ul class="row">';
                    foreach ($item->children[0] as $child) {
                        $children = Menu::id($child->id);
                        $result .= '<li class="col-lg-4"> <a href="' . $children->slug . '">' . $children->title . '</a>';
                        $result .= "</li>";
                    }
                    $result .= "</ul></div></div></div>";
                }
                $result .= "</li>";
            }
        }
        $result .= "</ul>";
        return $result;
    }


    public static function treeSidebar($location)
    {


        $menu = Menu::where('loc', 'main')->where("locale", Wlang::getCurrent())->first();

        if (!$menu) return false;
        $content = $menu->content;
        $content = json_decode($content);
        $result = '<div class="col-6">
                <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <div class="title-menu">
                    <h2>BÜTÜN SAYT</h2><img src="assets/images/Frame.svg" alt="menu">
                  </div>';
        if (is_array($content)) {
            foreach ($content[0] as $item) {
                $id = $item->id;
                $item_menu = Menu::id($id);
                $result .= '<a class="nav-link active show" id="' . $item_menu->slug . '" data-toggle="pill" href="' . $item_menu->slug . '"
                    role="tab" aria-controls="sidebar-menu-2" aria-selected="false">' . $item_menu->title . '</a>';
            }
        }
        $result .= "</div></div>";



        if (!$menu) return false;
        $content = $menu->content;
        $content = json_decode($content);
        $result .= '<div class="col-6"><div class="tab-content" id="v-pills-tabContent">';
        if (is_array($content)) {
            foreach ($content[0] as $item) {
                $id = $item->id;
                $item_menu = Menu::id($id);
                if (isset($item->children)) {

                    $result .= '<div class="tab-pane fade" id="' . $item_menu->slug . '" role="tabpanel"
                                     aria-labelledby="sidebar-menu-2-tab">
                                    <ul>';
                    foreach ($item->children[0] as $child) {
                        $children = Menu::id($child->id);
                        $result .= '<li> <a href="' . $children->slug . '">' . $children->title . '</a>';
                        $result .= "</li>";
                    }
                    $result .= "</ul></div>";
                }
            }
        }
        $result .= "</div></div>";
        return $result;
    }


    public static function treeLower($location)
    {
        $menu = Menu::where('loc', $location)->where("locale", Wlang::getCurrent())->first();

        if (!$menu) return false;
        $content = $menu->content;
        $content = json_decode($content);
        $result = '<ul class="navbar-nav">';
        if (is_array($content)) {
            foreach ($content[0] as $item) {
                if ($item) {
                    $id = $item->id;
                    $item_menu = Menu::id($id);
                    if ($item_menu) {

                        $result .= '<li class="menu-toggled nav-item">
                                        <a class="nav-link" href="' . $item_menu->slug . '">' . $item_menu->title . '</a> ';

                        if (isset($item->children)) {

                            $result .= '<div class="menu-content">
                                            <div class="row"><div class="col">
                                                    <ul class="row">';
                            foreach ($item->children[0] as $child) {
                                $children = Menu::id($child->id);
                                $result .= '<li class="col-lg-4"> <a href="' . $children->slug . '">' . $children->title . '</a>';
                                $result .= "</li>";
                            }
                            $result .= "</ul></div></div></div>";
                        }

                        $result .= "</li>";
                    }
                }
            }
        }
        $result .= "</ul>";
        return $result;
    }
}
