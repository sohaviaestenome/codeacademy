//
//  Score.swift
//  CodeHistory
//
//  Created by Pedro Silva on 09/05/2023.
//

import Foundation
 
struct ScoreViewModel {
  let correctGuesses: Int
  let incorrectGuesses: Int
 
  var percentage: Int {
    (correctGuesses * 100 / (correctGuesses + incorrectGuesses))
  }
}
