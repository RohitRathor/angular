/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

export * from './src/host';
export {DEFAULT_EXPORT_NAME, typeNodeToValueExpr} from './src/type_to_value';
export {TypeScriptReflectionHost, filterToMembersWithDecorator, reflectIdentifierOfDeclaration, reflectNameOfDeclaration, reflectObjectLiteral, reflectTypeEntityToDeclaration} from './src/typescript';