package com.professorangoti.condominio.controller;

import com.professorangoti.condominio.model.Proprietario;
import com.professorangoti.condominio.repository.ProprietarioRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/proprietario")
public class ProprietarioController {

    @Autowired
    private ProprietarioRepository proprietarioRepo;

    @GetMapping("/cadastro")
    public String mostrarFormCadastro(Proprietario proprietario) {
        return "form_prop"; 
    }

    @PostMapping("/salvar")
    public String salvarProprietario(
            @Valid Proprietario proprietario,
            BindingResult result,
            Model model
    ) {
        if (result.hasErrors()) {
            return "form_prop";
        }

        proprietarioRepo.save(proprietario);
        return "redirect:/proprietario/lista"; 
    }

    @GetMapping("/lista")
    public String listarProprietarios(Model model) {
        model.addAttribute("proprietarios", proprietarioRepo.findAllByOrderByNomeAsc());
        return "rel_prop";
    }

    @GetMapping("/editar/{id}")
    public String editarProprietario(@PathVariable("id") Long id, Model model) {
        Proprietario proprietario = proprietarioRepo.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Proprietário inválido: " + id));
        model.addAttribute("proprietario", proprietario);
        return "form_prop";
    }

    @GetMapping("/deletar/{id}")
    public String deletarProprietario(@PathVariable("id") Long id) {
        Proprietario proprietario = proprietarioRepo.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Proprietário inválido: " + id));
        proprietarioRepo.delete(proprietario);
        return "redirect:/proprietario/lista";
    }
}
