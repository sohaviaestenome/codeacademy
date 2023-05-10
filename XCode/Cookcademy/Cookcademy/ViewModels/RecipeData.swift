//
//  RecipeData.swift
//  Cookcademy
//
//  Created by Pedro Silva on 10/05/2023.
//

import Foundation

class RecipeData: ObservableObject {
  @Published var recipes = Recipe.testRecipes
}
