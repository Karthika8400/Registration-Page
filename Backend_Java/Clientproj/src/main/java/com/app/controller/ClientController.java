package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.State;
import com.app.model.UserEntity;

import com.app.service.ClientService;

@RestController
public class ClientController {

	@Autowired
	ClientService service;
	

	@PostMapping("/saveUser")
//	@CrossOrigin(origins = "http://localhost:4200")
	@CrossOrigin(origins = "http://localhost:3000")
	public UserEntity saveUser(@RequestBody UserEntity user) throws Exception {
		String tempEmailId = user.getEmail();
		if (tempEmailId != null && !"".equals(tempEmailId)) {
			UserEntity userObj = service.fetchUserByEmailId(tempEmailId);

			if (userObj != null) {
				throw new Exception("user with " + tempEmailId + " is already exists");
			}
		}
		UserEntity userObj = service.saveUser(user);
		return userObj;
	}


	@GetMapping("/getList")
	@CrossOrigin(origins = "http://localhost:3000")
	public List<UserEntity> getList() {
		return service.getList();
	}

	@DeleteMapping("/deleteUser/{id}")
	@CrossOrigin(origins = "http://localhost:3000")
	public String delete(@PathVariable int id) {
		service.deleteUserById(id);
		return "User Deleted Successfully!!!";
	}

	@GetMapping("/getStateList")
	@CrossOrigin(origins = "http://localhost:3000")
	public List<State> getStateList() {
		return service.getStates();
	}

}
