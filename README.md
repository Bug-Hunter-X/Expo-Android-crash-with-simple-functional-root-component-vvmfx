# Expo Android Crash with Simple Functional Root Component

This repository demonstrates a bug in Expo where a simple functional component used as the root component crashes the Android app.  The iOS app functions correctly.

## Problem

When using a basic functional component as the root of the Expo application, the Android build crashes with an unhelpful error message. The same code works fine on iOS.

## Solution

The solution involves wrapping the root component in a React.Fragment or a View component.