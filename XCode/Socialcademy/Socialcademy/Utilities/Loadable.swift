//
//  Loadable.swift
//  Socialcademy
//
//  Created by Pedro Silva on 15/05/2023.
//

import Foundation

enum Loadable<Value> {
    case loading
    case error(Error)
    case loaded(Value)
    
    var value: Value? {
        get {
            if case let .loaded(value) = self {
                return value
            }
            return nil
        }
        set {
            guard let newValue = newValue else { return }
            self = .loaded(newValue)
        }
    }
}
#if DEBUG
extension Loadable where Value: RangeReplaceableCollection {
    static var empty: Loadable<Value> { .loaded(Value()) }
    static var error: Loadable<Value> { .error(PreviewError()) }
     
    private struct PreviewError: LocalizedError {
        let errorDescription: String? = "Lorem ipsum dolor set amet."
    }
    
    func simulate() async throws -> Value {
        switch self {
        case .loading:
            try await Task.sleep(nanoseconds: 10 * 1_000_000_000)
            fatalError("Timeout exceeded for “loading” case preview")
        case let .error(error):
            throw error
        case let .loaded(value):
            return value
        }
    }
}

#endif
