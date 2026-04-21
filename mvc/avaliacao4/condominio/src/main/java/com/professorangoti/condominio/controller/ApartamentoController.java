package com.professorangoti.condominio.controller;

import com.professorangoti.condominio.model.Apartamento;
import com.professorangoti.condominio.model.Proprietario;
import com.professorangoti.condominio.repository.ApartamentoRepository;
import com.professorangoti.condominio.repository.ProprietarioRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/apartamento")
public class ApartamentoController {

    @Autowired
    private ApartamentoRepository apartamentoRepo;

    @Autowired
    private ProprietarioRepository proprietarioRepo;

    @GetMapping("/cadastro")
    public String mostrarFormCadastro(Apartamento apartamento, Model model) {
        model.addAttribute("proprietarios", proprietarioRepo.findAll());
        return "form_apto";
    }

    @PostMapping("/salvar")
    public String salvarApartamento(
            @Valid Apartamento apartamento,
            BindingResult result,
            Model model
    ) {
        if (result.hasErrors()) {
            model.addAttribute("proprietarios", proprietarioRepo.findAll());
            return "form_apto";
        }

        apartamentoRepo.save(apartamento);
        return "redirect:/apartamento/lista";
    }

    @GetMapping("/lista")
    public String listarApartamentos(Model model) {
        model.addAttribute("apartamentos", apartamentoRepo.findAllWithProprietarios());
        return "rel_apto";
    }

    @GetMapping("/editar/{id}")
    public String editarApartamento(@PathVariable("id") Long id, Model model) {
        Apartamento apartamento = apartamentoRepo.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Apartamento inválido: " + id));
        model.addAttribute("apartamento", apartamento);
        model.addAttribute("proprietarios", proprietarioRepo.findAll());
        return "form_apto";
    }

    @GetMapping("/deletar/{id}")
    public String deletarApartamento(@PathVariable("id") Long id) {
        Apartamento apartamento = apartamentoRepo.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Apartamento inválido: " + id));
        apartamentoRepo.delete(apartamento);
        return "redirect:/apartamento/lista";
    }
}
