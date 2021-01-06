package com.devsuperior.dsdeliver.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsdeliver.Dto.OrderDto;
import com.devsuperior.dsdeliver.Dto.ProductDto;
import com.devsuperior.dsdeliver.entities.Order;
import com.devsuperior.dsdeliver.entities.OrderStatus;
import com.devsuperior.dsdeliver.entities.Product;
import com.devsuperior.dsdeliver.repositories.OrderRepository;
import com.devsuperior.dsdeliver.repositories.ProductRepository;

@Service
public class OrderService {
	
	@Autowired
	private OrderRepository repository;
	
	@Autowired
	private ProductRepository productRepository;

	@Transactional(readOnly = true)
	public List<OrderDto> findAll() {
		List<Order> list = repository.findOrdersWithProducts();
		return list.stream().map(e -> new OrderDto(e)).collect(Collectors.toList());
	}
	
	@Transactional
	public OrderDto insert(OrderDto dto) {
		Order order = new Order(null, dto.getAddress(), dto.getLatitude(), dto.getLongitude(), Instant.now(), OrderStatus.PENDING);
	for  (ProductDto prod : dto.getProducts()) {
		Product product = productRepository.getOne(prod.getId());
		order.getProducts().add(product);
	}	
	
	order = repository.save(order);
	return new OrderDto(order);
	
	}
	
	@Transactional
	public OrderDto setDelivered(Long id) {
		Order order = repository.getOne(id);
		order.setStatus(OrderStatus.DELIVERED);
		order = repository.save(order);
		return new OrderDto(order);
	}
		
}
