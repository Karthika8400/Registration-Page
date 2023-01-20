package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.model.State;

public interface StateRepo extends JpaRepository<State,Integer> {

}
