//
//  WelcomeView.swift
//  CodeHistory
//
//  Created by Pedro Silva on 08/05/2023.
//

import SwiftUI

struct WelcomeView: View {
    let accentColor = Color(red: 48/255, green: 105/255, blue: 240/255)
    let mainColor = Color(red: 20/255, green: 28/255, blue: 58/255)
    
    var body: some View {
        NavigationView {
            ZStack {
                mainColor.ignoresSafeArea()
                VStack {
                    Spacer()
                    VStack(alignment: .leading,spacing:0) {
                        Text("Select the correct answers to the following questions.")
                            .font(.largeTitle)
                            .bold()
                            .multilineTextAlignment(.leading)
                            .padding()
                    }
                    Spacer()
                    NavigationLink(
                        destination: GameView(),
                        label: {
                            BottomTextView(str: "Okay let's go!")
                        })
                }
                .foregroundColor(.white)
            }
        }
    }
}

struct WelcomeView_Previews: PreviewProvider {
    static var previews: some View {
        WelcomeView()
    }
}
