//
//  RandomUsersTests.swift
//  RandomUsers
//
//  Created by Pedro Silva on 12/05/2023.
//

import XCTest
 
class RandomUsersTests: XCTestCase {
  private func getTestJSONData() -> Data {
    guard let path = Bundle.main.path(forResource: "randomUsers",
                                      ofType: "json") else {
      fatalError("randomUsers.json file not found")
    }
    let internalURL = URL(fileURLWithPath: path)
    return try! Data(contentsOf: internalURL)
  }
}
