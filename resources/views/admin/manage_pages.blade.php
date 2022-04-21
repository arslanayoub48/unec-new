<base href="/">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link href="/contentbuilder/assets/minimalist-blocks/content.css" rel="stylesheet" type="text/css" />
    <link href="/contentbuilder/contentbuilder/contentbuilder.css" rel="stylesheet" type="text/css" />
    <style>
        .container {  margin: 150px auto; max-width: 800px; width:100%; padding:0 35px; box-sizing: border-box;}
        .panel{
            position: absolute;
            top: 45px;
            left: 27px;
            background: #ccc;
            color: #262626;
            padding: 5px;
            width: 108px;
        }
        .panel div{
            display:flex;
        }
        .panel div div{
            margin: 16px;
            cursor: pointer;
        }
    </style>
<!-- This is just a sample content. Content can be loaded from a database. -->
<div class="contentbuilder-source container">
    <?php echo $page->content; ?>
</div>

<div class="panel">
    <div class="row">
        <div class="col-md-6">
            <i onclick="history.back()" class="fa fa-arrow-left"></i>
        </div>
        <div class="col-md-6">
            <i onclick="save()" class="fa fa-save"></i>
        </div>
    </div>
</div>
<div class="hidden">
    <form action="/admin/page/save" method="post">
        @csrf
        <input type="hidden" name="id" value="{{$page->id}}">
        <input type="hidden" name="source" id="source">
    </form>
</div>
<script src="/contentbuilder/contentbuilder/contentbuilder.min.js" type="text/javascript"></script>
<script src="/contentbuilder/assets/minimalist-blocks/content.js" type="text/javascript"></script> <!-- Snippets file -->

<script>
    var builder = new ContentBuilder({
        container: '.container',
    });
    function save(){
        let builder_elements = document.querySelectorAll(".is-tool");
        builder_elements.forEach((element) => element.remove())
        builder_elements = document.querySelectorAll(".is-rowadd-tool");
        builder_elements.forEach((element) => element.remove())

        let html = document.querySelector(".contentbuilder-source");
        let form = document.querySelector("form");
        document.getElementById("source").value = html.innerHTML;
        form.submit();
    }
</script>
