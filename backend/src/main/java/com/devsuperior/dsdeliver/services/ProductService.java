package com.devsuperior.dsdeliver.services;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.devsuperior.dsdeliver.Dto.ProductDto;
import com.devsuperior.dsdeliver.entities.Product;
import com.devsuperior.dsdeliver.repositories.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository repository;

	@Transactional(readOnly = true)
	public List<ProductDto> findAll() {
		List<Product> list = repository.findAllByOrderByNameAsc();
		return list.stream().map(e -> new ProductDto(e)).collect(Collectors.toList());
	}
}
