package com.isatimur.blog.repository;

import com.isatimur.blog.domain.Posts;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Posts entity.
 */
@SuppressWarnings("unused")
public interface PostsRepository extends JpaRepository<Posts,Long> {

}
