import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  produits : Produit[]; 
  produit = new Produit();
  constructor() {
    this.produits = [
      { idProduit : 1124,  nomProduit : "chaf story", prixProduit :400, dateCreation : new Date("01/14/2011")},
      { idProduit : 5442,  nomProduit : "the beginning", prixProduit : 21, dateCreation : new Date("12/17/2010")},
      { idProduit : 4458,  nomProduit :"all in one", prixProduit : 35.9, dateCreation : new Date("02/20/2020")}
    ];
   }

    listeProduits():Produit[] {
      return this.produits;
    }

    ajouterProduit( prod: Produit){
      this.produits.push(prod);
    }

    supprimerProduit( prod: Produit){
     
      const index = this.produits.indexOf(prod, 0);
      if (index > -1) {
        this.produits.splice(index, 1);
      }

      

    }

    consulterProdui(id:number): Produit{    
     this.produit =  this.produits.find(p => p.idProduit == id);
       return this.produit;
    }

   
    trierProduits(){
      this.produits = this.produits.sort((n1,n2) => {
        if (n1.idProduit > n2.idProduit) {
            return 1;
        }
    
        if (n1.idProduit < n2.idProduit) {
            return -1;
        }
    
        return 0;
    });
    }
    
    updateProduit(p:Produit)
    {
     
      this.supprimerProduit(p);
      this.ajouterProduit(p);
      this.trierProduits();
    }

   

}
