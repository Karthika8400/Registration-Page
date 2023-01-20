package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.model.UserEntity;

public interface ClientRepo extends JpaRepository<UserEntity, Integer> {

	UserEntity findByEmail(String email);

}
