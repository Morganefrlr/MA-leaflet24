import { useState } from "react"
import {fakeData} from '../fakeData/fakeData'
import { deepCloneArray, findIndexInArray } from "../utils/array"





export const useCity = () => {
    const [cities, setCities] = useState(fakeData)

    const handleAddCity = async (cityToAdd) => {
        const citiesClone = deepCloneArray(cities)
        const citiesUpdated = [cityToAdd[0], ...citiesClone]
        setCities(citiesUpdated)     
    }


    const handleEditCity = (cityToEdit) => {
        const citiesClone = deepCloneArray(cities)
        const cityToEditIndex = findIndexInArray(cityToEdit[0].id, citiesClone)
        citiesClone[cityToEditIndex] = cityToEdit[0]
        setCities(citiesClone)
    }


    const handleDeleteCity = (capital, country) =>{
        const citiesClone = deepCloneArray(cities)
        const citiesUpdated = citiesClone.filter(el => el.capital !== capital && el.country !== country )

        setCities(citiesUpdated)
    }


    return{cities, setCities, handleDeleteCity, handleAddCity, handleEditCity}
}