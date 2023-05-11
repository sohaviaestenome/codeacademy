//
//  ContentView.swift
//  TabViewProject
//
//  Created by Pedro Silva on 11/05/2023.
//

import SwiftUI
 
struct ContentView: View {
    var body: some View {
        TabView {
            Text("Home View")
            .tabItem {
                Label("Home", systemImage: "house")
            }
            Text("Profile View")
            .tabItem {
                Label("Profile", systemImage: "person.circle.fill")
            }
        }.tabViewStyle(PageTabViewStyle())
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
