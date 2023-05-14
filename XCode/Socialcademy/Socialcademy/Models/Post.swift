//
//  Post.swift
//  Socialcademy
//
//  Created by Pedro Silva on 14/05/2023.
//

import Foundation

struct Post: Identifiable {
    var title: String
    var content: String
    var authorName: String
    var timestamp = Date()
    var id = UUID()
}

extension Post {
    static let testPost = Post(
        title: "Lorem ipsum",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        authorName: "Jamie Harris"
    )
}
