// import { Injectable } from '@angular/core'

import { InjectionToken } from '@angular/core'

/**
 * Angular provides a mechanism for us to create a key or token that we can use in the dependency injector without creating a class, and
 * that is called the injection token.
 *
 * The Injection Token's job is to simply create a token used for the depndency injection registry in order to find the instance of
 * the service that we want.
 */

// declare let toastr:any;

/**
 * TOASTR_TOKEN - this is actual javascript object
 * If you have objects, two objects that look identical are not the same object.
 * as long as we export this object and use this specific object to look up in the dependency injector, nobody else can accidentally
 * use the same token or key in the dependency registry, so we don't get any conflicts. (Because, it will new instance for this module)
 * But If i were to use a string, then nobody else could use that string with their service. If they accidentally did, we get a conflict.
 * But because this is an object, somebody else could have another injection token that they happen to feed in this same string.
 */

export let TOASTR_TOKEN  = new InjectionToken<Toastr>('toastr');
/**
 * this constructor takes in a single parameter.. which is string, which is the description. this is just using debugging.
 * toastr - Description for the token, used only for debugging purposes, it should but does not need to be unique..
 * this is creating a token that i can then use to look up the toastr object inside of the dependency registry.
 */

export interface Toastr {
  success (msg: string, title?: string): void;
  info (msg: string, title?: string): void;
  warning (msg: string, title?: string): void;
  error (msg: string, title?: string): void;
}


