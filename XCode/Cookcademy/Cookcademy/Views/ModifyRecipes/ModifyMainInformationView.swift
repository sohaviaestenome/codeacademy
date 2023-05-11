//
//  ModifyMainInformationView.swift
//  Cookcademy
//
//  Created by Pedro Silva on 11/05/2023.
//

import SwiftUI
 
struct ModifyMainInformationView: View {
  private let listBackgroundColor = AppColor.background
  private let listTextColor = AppColor.foreground
 
  @Binding var mainInformation: MainInformation
 
  var body: some View {
    Form {
      TextField("Recipe Name", text: $mainInformation.name)
        .listRowBackground(listBackgroundColor)
      TextField("Author", text: $mainInformation.author)
        .listRowBackground(listBackgroundColor)
      Section(header: Text("Description")) {
        TextEditor(text: $mainInformation.description)
          .listRowBackground(listBackgroundColor)
      }
      Picker(selection: $mainInformation.category, label:
              HStack {
                Text("Category")
                Spacer()
                Text(mainInformation.category.rawValue)
              }) {
        ForEach(MainInformation.Category.allCases,
                id: \.self) { category in
          Text(category.rawValue)
        }
              }
      .listRowBackground(listBackgroundColor)
      .pickerStyle(MenuPickerStyle())
    }
    .foregroundColor(listTextColor)
  }
}

struct ModifyMainInformationView_Previews: PreviewProvider {
    static var previews: some View {
        
        let mainInformation = MainInformation(name: "Sample Recipe", description: "This is a sample recipe", author: "John Doe", category: .dessert)

        // Bind the instance to your view
        ModifyMainInformationView(mainInformation: .constant(mainInformation))
    }
}



