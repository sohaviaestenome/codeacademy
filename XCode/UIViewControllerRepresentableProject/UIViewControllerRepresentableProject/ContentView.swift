//
//  ContentView.swift
//  UIViewControllerRepresentableProject
//
//  Created by Pedro Silva on 28/05/2023.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            Text("Choose an Image!")
                .font(.largeTitle)
                .padding()
            Spacer()
            Image(systemName: "photo")
                .resizable()
                .scaledToFit()
                .padding()
            Spacer()
            Spacer()
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
