import { Injectable } from '@angular/core';
import { Place } from './place.model'

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Place[] = [
    {
      id:'1',
      tittle:'Moon',
      imageURL:'https://i.blogs.es/aa1b9a/luna-100mpx/450_1000.jpg',
      comments:['Great Place', 'Far away from Earth']
    },
    {
      id:'2',
      tittle:'Eiffel Tower',
      imageURL:'https://previews.123rf.com/images/sorapop/sorapop1212/sorapop121200043/17024838-eiffel-tower-is-reproduced-to-mini-size-in-mini-siam-thailand-.jpg',
      comments:['Great Place', 'Beautiful experience']
    },

    {
      id:'3',
      tittle:'Prueba no comentarios',
      imageURL:'https://previews.123rf.com/images/sorapop/sorapop1212/sorapop121200043/17024838-eiffel-tower-is-reproduced-to-mini-size-in-mini-siam-thailand-.jpg',
      comments:[]
    }
  ]

  constructor() { }

  getPlaces(){
    return [...this.places]
  }

  getPlace(placeId: string){
    return {
      ...this.places.find(place =>{
        return place.id === placeId
      })
    }
  }

  addPlace(tittle: string, imageURL: string){
    this.places.push({
      tittle,
      imageURL,
      comments: [],
      id: this.places.length + 1 + ""
    });
  }
   


  deletePlace(placeId: string){
    this.places = this.places.filter(place =>{
      return place.id !== placeId
    })
  }


}
