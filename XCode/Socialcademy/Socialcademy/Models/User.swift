//
//  User.swift
//  Socialcademy
//
//  Created by Pedro Silva on 16/05/2023.
//


import Foundation

struct User: Identifiable, Equatable, Codable {
    var id: String
    var name: String
}

extension User {
    static let testUser = User(id: "", name: "Jamie Harris")
}
