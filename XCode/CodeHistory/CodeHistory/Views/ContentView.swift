//
//  ContentView.swift
//  CodeHistory
//
//  Created by Pedro Silva on 06/05/2023.
//

import SwiftUI

struct ContentView: View {
    
    let question = Question(
        questionText: "What is the best football club in Portugal?",
        possibleAnswers: ["Sporting", "Benfica", "Porto", "Braga"],
        correctAnswerIndex: 0)
    
    @State var mainColor = Color(red: 20/255, green: 28/255, blue: 58/255)
    let accentColor = Color(red: 48/255, green: 105/255, blue: 240/255)
    
    var body: some View {
        ZStack {
            mainColor.ignoresSafeArea()
            VStack {
                Text("1 / 10")
                    .font(.callout)
                    .multilineTextAlignment(.leading)
                    .padding()
                Text(question.questionText)
                    .font(.largeTitle)
                    .bold()
                    .multilineTextAlignment(.leading)
                Spacer()
                HStack {
                    ForEach(0..<question.possibleAnswers.count) { answerIndex in
                        Button(action: {
                            print("Tapped on option with the text: \(question.possibleAnswers[answerIndex])")
                            
                            // The line below should be the last thing learners add in this article
                            mainColor = answerIndex == question.correctAnswerIndex ? .green : .red
                        }) {
                            ChoiceTextView(choiceText: question.possibleAnswers[answerIndex])
                        }
                    }
                }
            }
        }
        .foregroundColor(.white)
    }
}


struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
