package com.professorangoti.torresmo.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.professorangoti.torresmo.model.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {
  List<Produto> findByDestaqueTrue();
}
