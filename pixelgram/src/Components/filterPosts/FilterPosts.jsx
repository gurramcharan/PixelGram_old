import React, { useContext } from 'react'
import { PostContext } from '../../Contexts/PostContext'
import "./FilterPosts.css"

export const FilterPosts = () => {
    const { TrendingHandler, LatestHandler } = useContext(PostContext)
    const handleFilter = (value) => {
        if (value === "latest") {
            LatestHandler()
        } else{
            TrendingHandler()
        }
    }
    return (
        <div>
            <select name="sort" id="filter-sort" onChange={(e) => handleFilter(e.target.value)}>
                <option value="latest">Latest Posts</option>
                <option value="trending">Trending</option>
            </select>
        </div>
    )
}
