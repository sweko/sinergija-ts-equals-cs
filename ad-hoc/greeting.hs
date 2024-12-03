{-# OPTIONS_GHC -Wno-unrecognised-pragmas #-}
{-# HLINT ignore "Redundant lambda" #-}

module Main where

greet = \name -> "Hello, " ++ name ++ "!"
people = ["Haskell", "Wekoslav", "Sinergija", "Belgrade"]

greeted = map greet people

main = mapM_ putStrLn greeted



