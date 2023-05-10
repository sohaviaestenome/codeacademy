//
//  ContentView.swift
//  Cookcademy
//
//  Created by Pedro Silva on 10/05/2023.
//

import SwiftUI

struct RecipesListView: View {
  @StateObject var recipeData = RecipeData()
     
  var body: some View {
    List {
      // Recipes go here
    }
    .navigationTitle("All Recipes")
  }
}


struct RecipesListView_Previews: PreviewProvider {
    static var previews: some View {
        RecipesListView()
    }
}
