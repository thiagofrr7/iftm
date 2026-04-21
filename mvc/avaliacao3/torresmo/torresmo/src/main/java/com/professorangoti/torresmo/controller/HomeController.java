package com.professorangoti.torresmo.controller;

import com.professorangoti.torresmo.model.Produto;
import com.professorangoti.torresmo.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import java.util.List;

@Controller
public class HomeController {

    @Autowired
    private ProdutoRepository produtoRepository;

    @GetMapping("/")
    public String home(Model model) {
        List<Produto> destaques = produtoRepository.findByDestaqueTrue();
        model.addAttribute("destaques", destaques);
        return "home";
    }
}
