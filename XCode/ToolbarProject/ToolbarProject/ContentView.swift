//
//  ContentView.swift
//  ToolbarProject
//
//  Created by Pedro Silva on 10/05/2023.
//

import SwiftUI
 
struct ContentView: View {
    @State var isPresenting: Bool = false
    
    var body: some View {
        NavigationView {
            Text("Initial View")
                .toolbar {
                    ToolbarItem(placement: .navigationBarLeading) {
                        Button(action: {
                            isPresenting = true
                        }, label: {
                            Image(systemName: "gear")
                        })
                    }
                }
                .sheet(isPresented: $isPresenting) {
                    NavigationView {
                        Text("Settings Page")
                            .navigationTitle("Settings")
                            .toolbar {
                                ToolbarItem(placement: .navigationBarTrailing) {
                                    Button("Save", action: {
                                        isPresenting = false
                                    })
                                }
                            }
                    }
                }
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
