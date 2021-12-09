<?php

namespace Yanntyb\App\Model\Traits;

trait RenderViewTrait {

    public function render(string $view, string $title = "titre a ajouter", $var = null) {
        ob_start();
        require_once $_SERVER["DOCUMENT_ROOT"] . "/../View/$view.view.php";
        $html = ob_get_clean();
        require_once $_SERVER["DOCUMENT_ROOT"] . "/../View/_partials/base.view.php";
    }

    public function log(string $message, array $value){

    }
}