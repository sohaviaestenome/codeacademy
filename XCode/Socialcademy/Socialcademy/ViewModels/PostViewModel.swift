//
//  PostViewModel.swift
//  Socialcademy
//
//  Created by Pedro Silva on 15/05/2023.
//

import Foundation

@MainActor
class PostsViewModel: ObservableObject {
    @Published var posts = [Post.testPost]
}
