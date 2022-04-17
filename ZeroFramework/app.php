<?php
    $model_dir = "../app/Models/";
    $controller_dir = "../app/Http/Controllers/";
    $route_dir = "../routes/web.php";
    $migration_dir  ="../database/migrations/";
    $navigator_dir  ="../resources/views/admin/layouts/app.blade.php";


if(file_exists("program.json")){
    $program = file_get_contents("program.json");
    $json = json_decode($program);
    $table = $json->table;
    
    //Navigator
    $nav = '<li><a href="/admin'.$json->route.'"><i class="fa fa-edit"></i>'.$json->title.'</a></li>';
    $navs = file_get_contents($navigator_dir);
    $navs = str_replace("<program></program>", $nav."<program></program>",$navs);
    file_put_contents($navigator_dir, $navs);
    //MODEL
    $model = file_get_contents("sources/model.php");
    $model = str_replace("ModelName", ucfirst($table), $model);
    $model = str_replace("{{table}}", $table, $model);
    file_put_contents($model_dir.ucfirst($table).".php",$model);

    //CONTROLLER
    $controller = file_get_contents("sources/controller.php");
    $controller = str_replace("ModelName", ucfirst($table), $controller);
    $controller = str_replace("{{title}}", $json->title, $controller);
    $controller = str_replace("{{description}}", $json->description, $controller);
    $codescript = "";
    $editcols = "";
    $cols = '"#"';
    $imagecol = -1;
    $actions  = "";
    $editcols = '';
    for($i=0; $i< count($json->cols); $i++){
        $editcols .= "[";
        $cols .= ',"'.$json->cols[$i]->text. '"';
        if($json->cols[$i]->type == "image"){
            $imagecol = $i;
        }
        foreach($json->cols[$i] as $key => $value){
                $editcols .='"'.$key.'" => "'.$value.'",';
        }
        $editcols .= "],";
    }
    $controller = str_replace("{{editcols}}", $editcols, $controller);
    $controller = str_replace("{{cols}}", $cols, $controller);
    if($imagecol > -1){
        $controller = str_replace("{{imagecol}}", $imagecol, $controller);
    }else{
        $controller = str_replace("{{imagecol}}", "", $controller);
    }
    for($i=0; $i< count($json->actions); $i++){
        $actions .= "[";
        $cols .= ',"'.$json->actions[$i]->text. '"';
        if($json->actions[$i]->type == "remove"){
            $json->actions[$i]->link = "/dataPageAction?action=remove";
        }
        if($json->actions[$i]->type == "edit"){
            $json->actions[$i]->link = "/dataPageAction?action=edit";
        }
        if($json->actions[$i]->type == "create"){
            $json->actions[$i]->link = "/dataPageAction?action=create";
        }
        foreach($json->actions[$i] as $key => $value){
            $actions .='"'.$key.'" => "'.$value.'",';
        }
        $actions .= "],";
    }
    $controller = str_replace("{{actions}}", $actions, $controller);
    $controller = str_replace(",]", "]", $controller);
    $controller = str_replace("{{table}}", $table, $controller);
    foreach($json->cols as $col){

        $codescript.="$"."sub[] = "."$"."data->$col->name;";
    }
    $controller = str_replace("{{code}}", $codescript, $controller);
    $controller = str_replace("ControllerName", ucfirst($table)."Controller", $controller);
    file_put_contents($controller_dir.ucfirst($table)."Controller.php",$controller);

    //Route
    $middleware = $json->middleware ? "->middleware('".$json->middleware."')": "";
    $file = file_get_contents($route_dir);
    $file .=' Route::get("'.$json->route.'","'.ucfirst($table).'Controller@list")'.$middleware.';';
    file_put_contents($route_dir, $file);
    
    //Migration
    if($json->migration){
        $tablescript = "";
        $cols = $json->cols;
        foreach($cols as $col){
            switch($col->type){
                default:
                $tablescript.="$"."table"."->"."string('$col->name');";
                break;
            }
        }
        $tablescript.="$"."table"."->"."timestamp('updated_at')->useCurrent();";
        $tablescript.="$"."table"."->"."timestamp('created_at')->useCurrent();";
        $file = file_get_contents("sources/migration.php");
        $file = str_replace("tableName", $table, $file);
        $file = str_replace("CreateTable", "Create".$table, $file);
        $file = str_replace("{{code}}", $tablescript, $file);
        file_put_contents($migration_dir."create_table_$table.php", $file);
    }
    
   
}

