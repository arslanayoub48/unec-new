 $data = [];
        foreach(auth()->user()->terminal as $terminal){
            $sub = [];
            $sub[] = $terminal->id;
            $sub[] = $terminal->restaurant->name;
            $sub[] = $terminal->name;
            $sub[] = $terminal->version;
            $sub[] = $terminal->connected_at;
            $sub[] = $terminal->status == 0 ? "Qeyri aktiv" : "Qoşulu";
            $data[] = $sub;
        }
        $params = [
            "title" => "Terminallar",
            "table" => "terminals",
            "description" => "Hər bir avadanlığa görə 1 terminal qeydiyyatdan keçirilməlidir. Yeni terminalın qeydiyyatı ödənişlidir. ",
            "addCols" => [""],
            
            "cols" => [
                "#",
                "Restoran",
                "Terminalın adı",
                "Versiyası",
                "Qoşulma tarixi",
                "Statusu"
            ],
            "data" => $data,
            "noaction" => false,
            "actions" => [
                [
                    "action" => "redirect",
                    "icon" => "fa fa-plus",
                    "text" => "Yenisini yarat" ,
                    "function" => "/test123?action=update",
                    "position" => "top"
                ],
                [
                    "action" => "redirect",
                    "icon" => "fa fa-home",
                    "text" => "Update" ,
                    "function" => "/test123?action=update"
                ], [
                    "action" => "remove",
                    "icon" => "fa fa-home",
                    "text" => "Sil" ,
                    "function" => ""
                ], [
                    "action" => "custom",
                    "icon" => "fa fa-home",
                    "text" => "Test" ,
                    "function" => "test"

                ]
            ]
        ];
        $request->session()->put("params", $params);