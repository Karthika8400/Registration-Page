package com.app.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.model.State;
import com.app.model.UserEntity;


import com.app.repository.ClientRepo;
import com.app.repository.StateRepo;


@Service
public class ClientService {

	@Autowired
	ClientRepo repo;
	
	@Autowired StateRepo rep;
	

	public UserEntity saveUser(UserEntity user) {
		return repo.save(user);
	}

	public List<UserEntity> getList() {
		return repo.findAll();
	}

	public String deleteUserById(int id) {
		String res;
		repo.deleteById(id);
		res = "User Successfully Deleted";
		return res;
	}

	public UserEntity fetchUserByEmailId(String email) {
		return repo.findByEmail(email);
	}
	
	public List<State> getStates() {
		return rep.findAll();
	}

}
