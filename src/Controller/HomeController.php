<?php

namespace Yanntyb\App\Controller;

use Yanntyb\App\Model\Traits\RenderViewTrait;

class HomeController
{
    use RenderViewTrait;

    public function home(){
        $this->render("Home/home","Home");
    }
}