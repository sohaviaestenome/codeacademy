//
//  RecipeCategoryGridView.swift
//  Cookcademy
//
//  Created by Pedro Silva on 10/05/2023.
//

import SwiftUI
 
struct RecipeCategoryGridView: View {
  var body: some View {
    let columns = [GridItem(), GridItem()]
    NavigationView {
      ScrollView {
        LazyVGrid(columns: columns, content: {
          ForEach(MainInformation.Category.allCases,
                  id: \.self) { category in
            CategoryView(category: category)
          }
        })
      }
      .navigationTitle("Categories")
    }
  }
}
 
struct CategoryView: View {
  let category: MainInformation.Category
 
  var body: some View {
    ZStack {
      Image(category.rawValue)
        .resizable()
        .aspectRatio(contentMode: .fit)
        .opacity(0.35)
      Text(category.rawValue)
        .font(.title)
    }
  }
}
 
struct RecipeCategoryGridView_Previews: PreviewProvider {
  static var previews: some View {
    RecipeCategoryGridView()
  }
}
