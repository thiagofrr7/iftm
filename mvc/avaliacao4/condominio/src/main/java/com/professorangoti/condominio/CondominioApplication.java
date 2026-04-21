package com.professorangoti.condominio;

import com.professorangoti.condominio.model.Apartamento;
import com.professorangoti.condominio.model.Proprietario;
import com.professorangoti.condominio.repository.ApartamentoRepository;
import com.professorangoti.condominio.repository.ProprietarioRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CondominioApplication {

    public static void main(String[] args) {
        SpringApplication.run(CondominioApplication.class, args);
    }

    @Bean
    CommandLineRunner testarRepositories(
        ProprietarioRepository proprietarioRepo,
        ApartamentoRepository apartamentoRepo
    ) {
        return args -> {
            System.out.println("\n=== TESTANDO REPOSITORIES ===\n");

            // Criar proprietários
            Proprietario maria = new Proprietario();
            maria.setNome("Maria Silva");
            maria.setTelefone("(11) 98765-4321");
            proprietarioRepo.save(maria);

            Proprietario joao = new Proprietario();
            joao.setNome("João Santos");
            joao.setTelefone("(11) 91234-5678");
            proprietarioRepo.save(joao);

            System.out.println("✓ Proprietários salvos!");

            // Criar apartamentos
            Apartamento apto101 = new Apartamento(101, 2, "Proprietário", maria);
            Apartamento apto102 = new Apartamento(102, 3, "Inquilino", maria);
            Apartamento apto201 = new Apartamento(201, 1, "Vazio", joao);

            apartamentoRepo.save(apto101);
            apartamentoRepo.save(apto102);
            apartamentoRepo.save(apto201);

            System.out.println("✓ Apartamentos salvos!");

            // Testar consultas
            System.out.println("\n--- Testes de Consulta ---");

            System.out.println("Total de proprietários: " + proprietarioRepo.count());
            System.out.println("Total de apartamentos: " + apartamentoRepo.count());

            System.out.println("\nProprietários com 'Silva' no nome:");
            proprietarioRepo.findByNomeContainingIgnoreCase("silva")
                .forEach(p -> System.out.println("  - " + p.getNome()));

            System.out.println("\nApartamentos vazios:");
            apartamentoRepo.findByTipoOcupacao("Vazio")
                .forEach(a -> System.out.println("  - Apto " + a.getNumeroPorta()));

            System.out.println("\nApartamentos de Maria:");
            apartamentoRepo.findByProprietarioId(maria.getId())
                .forEach(a -> System.out.println("  - Apto " + a.getNumeroPorta() +
                    " (" + a.getQuantidadeQuartos() + " quartos)"));

            System.out.println("\n=== TESTES CONCLUÍDOS ===\n");
        };
    }
}