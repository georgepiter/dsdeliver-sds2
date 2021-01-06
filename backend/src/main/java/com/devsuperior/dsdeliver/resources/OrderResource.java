package com.devsuperior.dsdeliver.resources;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.devsuperior.dsdeliver.Dto.OrderDto;
import com.devsuperior.dsdeliver.services.OrderService;

@RestController
@RequestMapping(value = "/orders")
public class OrderResource {
	
	@Autowired
	private OrderService service;
	
	@GetMapping
	public ResponseEntity<List<OrderDto>> findAll(){
		List<OrderDto> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}

	@PostMapping
	public ResponseEntity<OrderDto> insert(@RequestBody OrderDto dto) {
		dto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(dto);	
	}
	
	@PutMapping("/{id}/delivered") 
	public ResponseEntity<OrderDto> setDelivered(@PathVariable Long id){
		OrderDto dto = service.setDelivered(id);
		return ResponseEntity.ok().body(dto);
	}
}

