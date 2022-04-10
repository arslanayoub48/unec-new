params:
    title - Page Title
    table - mysql table
    description - Page Description
    visible = Hide on false
    editcols - Array of ediable cols
        text - Label
        name - Input name
        type - Type of input (text,select,hidden,checkbox, jsselect, ckeditor)
        placeholder - Placeholder of input
        selectdata - Array data of options of select with ->toArray()
        selectdatacol - Col which will shows in select values
        required - Setting true if input is required
        value - Default value of input
        exceptMe - Using on select input to not display self 
    cols - Array of cols in table (Example 'Name', 'Surname', 'Telephone' )
    data - Array of data to show in table
    noaction - Setting true if there only one button for creating new item
    actions - Array of actions which use can do to evey row
        
        text - Text of col
        icon - Icon of col from fontawesome (Example fa fa-plus)
        link - Link of redirect on click 
            /dataPageAction?action=create
            /dataPageAction?action=edit
            /dataPageAction?action=remove
        position - Setting position to top then button will shows on top of page;
    editcols -> jsselect
        [
                "text" => "Test",
                "name" => "test2",
                "type" => "jsselect",
                "selectdata" => [
                    [
                        "id" => 1,
                        "text" => "Linkə keçid",
                        "show" => "test"
                    ],
                    [
                        "id" => 1,
                        "text" => "Başqa səhifəyə keçid",
                        "show" => "color"
                    ]
                ],
                "selectdatacol" => "text",
                "required" => false,
                "value" => ""
            ]

And call 
$request->session()->put("params", $params);
return view("admin/datapage" , ["params" => $params] );