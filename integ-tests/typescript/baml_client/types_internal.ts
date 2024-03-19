// This file is auto-generated. Do not edit this file manually.
//
// Disable formatting for this file to avoid linting errors.
// tslint:disable
// @ts-nocheck
/* eslint-disable */


import { Blah, ClassOptionalFields, ClassOptionalOutput, ClassOptionalOutput2, EnumInClass, EnumOutput, ModifiedOutput, NamedArgsSingleClass, NamedArgsSingleEnum, NamedArgsSingleEnumList, OptionalClass, OptionalTest_CategoryType, OptionalTest_Prop1, OptionalTest_ReturnType, OverrideClass, OverrideEnum, TestClassAlias, TestClassWithEnum, TestEnum, TestOutputClass, UnionTest_ReturnType } from './types';


// Function to check if a value is a member of the EnumInClass enum
function isEnumInClass(value: any): value is EnumInClass {
  return Object.values(EnumInClass).includes(value);
}

// Function to check if a value is a member of the EnumOutput enum
function isEnumOutput(value: any): value is EnumOutput {
  return Object.values(EnumOutput).includes(value);
}

// Function to check if a value is a member of the NamedArgsSingleEnum enum
function isNamedArgsSingleEnum(value: any): value is NamedArgsSingleEnum {
  return Object.values(NamedArgsSingleEnum).includes(value);
}

// Function to check if a value is a member of the NamedArgsSingleEnumList enum
function isNamedArgsSingleEnumList(value: any): value is NamedArgsSingleEnumList {
  return Object.values(NamedArgsSingleEnumList).includes(value);
}

// Function to check if a value is a member of the OptionalTest_CategoryType enum
function isOptionalTest_CategoryType(value: any): value is OptionalTest_CategoryType {
  return Object.values(OptionalTest_CategoryType).includes(value);
}

// Function to check if a value is a member of the OverrideEnum enum
function isOverrideEnum(value: any): value is OverrideEnum {
  return Object.values(OverrideEnum).includes(value);
}

// Function to check if a value is a member of the TestEnum enum
function isTestEnum(value: any): value is TestEnum {
  return Object.values(TestEnum).includes(value);
}

// Function to validate if an object is a Blah object
function isBlah(obj: any): obj is Blah {
  return (
    obj &&
    typeof obj === "object"
    && ("prop4" in obj && ((obj.prop4 === null || obj.prop4 === undefined) || typeof obj.prop4 === 'string'))
  );
}


class InternalBlah implements Blah {
  private constructor(private data: {
    prop4: string | null,
  }, private raw: Blah) {}

  static from(data: Blah): InternalBlah {
    return new InternalBlah({
      prop4: (data.prop4 === null || data.prop4 === undefined) ? null : data.prop4,
    }, data);
  }

  get prop4(): string | null {
    return this.data.prop4;
  }


  toJSON(): string {
    return JSON.stringify(this.raw, null, 2);
  }
}

// Function to validate if an object is a ClassOptionalFields object
function isClassOptionalFields(obj: any): obj is ClassOptionalFields {
  return (
    obj &&
    typeof obj === "object"
    && ("prop1" in obj && ((obj.prop1 === null || obj.prop1 === undefined) || typeof obj.prop1 === 'string'))
    && ("prop2" in obj && ((obj.prop2 === null || obj.prop2 === undefined) || typeof obj.prop2 === 'string'))
  );
}


class InternalClassOptionalFields implements ClassOptionalFields {
  private constructor(private data: {
    prop1: string | null,
    prop2: string | null,
  }, private raw: ClassOptionalFields) {}

  static from(data: ClassOptionalFields): InternalClassOptionalFields {
    return new InternalClassOptionalFields({
      prop1: (data.prop1 === null || data.prop1 === undefined) ? null : data.prop1,
      prop2: (data.prop2 === null || data.prop2 === undefined) ? null : data.prop2,
    }, data);
  }

  get prop1(): string | null {
    return this.data.prop1;
  }
  get prop2(): string | null {
    return this.data.prop2;
  }


  toJSON(): string {
    return JSON.stringify(this.raw, null, 2);
  }
}

// Function to validate if an object is a ClassOptionalOutput object
function isClassOptionalOutput(obj: any): obj is ClassOptionalOutput {
  return (
    obj &&
    typeof obj === "object"
    && ("prop1" in obj && (typeof obj.prop1 === 'string'))
    && ("prop2" in obj && (typeof obj.prop2 === 'string'))
  );
}


class InternalClassOptionalOutput implements ClassOptionalOutput {
  private constructor(private data: {
    prop1: string,
    prop2: string,
  }, private raw: ClassOptionalOutput) {}

  static from(data: ClassOptionalOutput): InternalClassOptionalOutput {
    return new InternalClassOptionalOutput({
      prop1: data.prop1,
      prop2: data.prop2,
    }, data);
  }

  get prop1(): string {
    return this.data.prop1;
  }
  get prop2(): string {
    return this.data.prop2;
  }


  toJSON(): string {
    return JSON.stringify(this.raw, null, 2);
  }
}

// Function to validate if an object is a ClassOptionalOutput2 object
function isClassOptionalOutput2(obj: any): obj is ClassOptionalOutput2 {
  return (
    obj &&
    typeof obj === "object"
    && ("prop1" in obj && ((obj.prop1 === null || obj.prop1 === undefined) || typeof obj.prop1 === 'string'))
    && ("prop2" in obj && ((obj.prop2 === null || obj.prop2 === undefined) || typeof obj.prop2 === 'string'))
    && ("prop3" in obj && ((obj.prop3 === null || obj.prop3 === undefined) || isBlah(obj.prop3)))
  );
}


class InternalClassOptionalOutput2 implements ClassOptionalOutput2 {
  private constructor(private data: {
    prop1: string | null,
    prop2: string | null,
    prop3: Blah | null,
  }, private raw: ClassOptionalOutput2) {}

  static from(data: ClassOptionalOutput2): InternalClassOptionalOutput2 {
    return new InternalClassOptionalOutput2({
      prop1: (data.prop1 === null || data.prop1 === undefined) ? null : data.prop1,
      prop2: (data.prop2 === null || data.prop2 === undefined) ? null : data.prop2,
      prop3: (data.prop3 === null || data.prop3 === undefined) ? null : new InternalBlah(data.prop3),
    }, data);
  }

  get prop1(): string | null {
    return this.data.prop1;
  }
  get prop2(): string | null {
    return this.data.prop2;
  }
  get prop3(): Blah | null {
    return this.data.prop3;
  }


  toJSON(): string {
    return JSON.stringify(this.raw, null, 2);
  }
}

// Function to validate if an object is a ModifiedOutput object
function isModifiedOutput(obj: any): obj is ModifiedOutput {
  return (
    obj &&
    typeof obj === "object"
    && ("reasoning" in obj && (typeof obj.reasoning === 'string'))
    && ("answer" in obj && (typeof obj.answer === 'string'))
  );
}


class InternalModifiedOutput implements ModifiedOutput {
  private constructor(private data: {
    reasoning: string,
    answer: string,
  }, private raw: ModifiedOutput) {}

  static from(data: ModifiedOutput): InternalModifiedOutput {
    return new InternalModifiedOutput({
      reasoning: data.reasoning,
      answer: data.answer,
    }, data);
  }

  get reasoning(): string {
    return this.data.reasoning;
  }
  get answer(): string {
    return this.data.answer;
  }


  toJSON(): string {
    return JSON.stringify(this.raw, null, 2);
  }
}

// Function to validate if an object is a NamedArgsSingleClass object
function isNamedArgsSingleClass(obj: any): obj is NamedArgsSingleClass {
  return (
    obj &&
    typeof obj === "object"
    && ("key" in obj && (typeof obj.key === 'string'))
    && ("key_two" in obj && (typeof obj.key_two === 'boolean'))
    && ("key_three" in obj && (typeof obj.key_three === 'number'))
  );
}


class InternalNamedArgsSingleClass implements NamedArgsSingleClass {
  private constructor(private data: {
    key: string,
    key_two: boolean,
    key_three: number,
  }, private raw: NamedArgsSingleClass) {}

  static from(data: NamedArgsSingleClass): InternalNamedArgsSingleClass {
    return new InternalNamedArgsSingleClass({
      key: data.key,
      key_two: data.key_two,
      key_three: data.key_three,
    }, data);
  }

  get key(): string {
    return this.data.key;
  }
  get key_two(): boolean {
    return this.data.key_two;
  }
  get key_three(): number {
    return this.data.key_three;
  }


  toJSON(): string {
    return JSON.stringify(this.raw, null, 2);
  }
}

// Function to validate if an object is a OptionalClass object
function isOptionalClass(obj: any): obj is OptionalClass {
  return (
    obj &&
    typeof obj === "object"
    && ("prop1" in obj && (typeof obj.prop1 === 'string'))
    && ("prop2" in obj && (typeof obj.prop2 === 'string'))
  );
}


class InternalOptionalClass implements OptionalClass {
  private constructor(private data: {
    prop1: string,
    prop2: string,
  }, private raw: OptionalClass) {}

  static from(data: OptionalClass): InternalOptionalClass {
    return new InternalOptionalClass({
      prop1: data.prop1,
      prop2: data.prop2,
    }, data);
  }

  get prop1(): string {
    return this.data.prop1;
  }
  get prop2(): string {
    return this.data.prop2;
  }


  toJSON(): string {
    return JSON.stringify(this.raw, null, 2);
  }
}

// Function to validate if an object is a OptionalTest_Prop1 object
function isOptionalTest_Prop1(obj: any): obj is OptionalTest_Prop1 {
  return (
    obj &&
    typeof obj === "object"
    && ("omega_a" in obj && (typeof obj.omega_a === 'string'))
    && ("omega_b" in obj && (typeof obj.omega_b === 'number'))
  );
}


class InternalOptionalTest_Prop1 implements OptionalTest_Prop1 {
  private constructor(private data: {
    omega_a: string,
    omega_b: number,
  }, private raw: OptionalTest_Prop1) {}

  static from(data: OptionalTest_Prop1): InternalOptionalTest_Prop1 {
    return new InternalOptionalTest_Prop1({
      omega_a: data.omega_a,
      omega_b: data.omega_b,
    }, data);
  }

  get omega_a(): string {
    return this.data.omega_a;
  }
  get omega_b(): number {
    return this.data.omega_b;
  }


  toJSON(): string {
    return JSON.stringify(this.raw, null, 2);
  }
}

// Function to validate if an object is a OptionalTest_ReturnType object
function isOptionalTest_ReturnType(obj: any): obj is OptionalTest_ReturnType {
  return (
    obj &&
    typeof obj === "object"
    && ("omega_1" in obj && ((obj.omega_1 === null || obj.omega_1 === undefined) || isOptionalTest_Prop1(obj.omega_1)))
    && ("omega_2" in obj && ((obj.omega_2 === null || obj.omega_2 === undefined) || typeof obj.omega_2 === 'string'))
    && ("omega_3" in obj && (Array.isArray(obj.omega_3) && obj.omega_3.every((x: any) => (x === null || x === undefined) || isOptionalTest_CategoryType(x))))
  );
}


class InternalOptionalTest_ReturnType implements OptionalTest_ReturnType {
  private constructor(private data: {
    omega_1: OptionalTest_Prop1 | null,
    omega_2: string | null,
    omega_3: OptionalTest_CategoryType | null[],
  }, private raw: OptionalTest_ReturnType) {}

  static from(data: OptionalTest_ReturnType): InternalOptionalTest_ReturnType {
    return new InternalOptionalTest_ReturnType({
      omega_1: (data.omega_1 === null || data.omega_1 === undefined) ? null : new InternalOptionalTest_Prop1(data.omega_1),
      omega_2: (data.omega_2 === null || data.omega_2 === undefined) ? null : data.omega_2,
      omega_3: data.omega_3.map(x => (x === null || x === undefined) ? null : x),
    }, data);
  }

  get omega_1(): OptionalTest_Prop1 | null {
    return this.data.omega_1;
  }
  get omega_2(): string | null {
    return this.data.omega_2;
  }
  get omega_3(): OptionalTest_CategoryType | null[] {
    return this.data.omega_3;
  }


  toJSON(): string {
    return JSON.stringify(this.raw, null, 2);
  }
}

// Function to validate if an object is a OverrideClass object
function isOverrideClass(obj: any): obj is OverrideClass {
  return (
    obj &&
    typeof obj === "object"
    && ("prop1" in obj && (typeof obj.prop1 === 'string'))
    && ("prop2" in obj && (typeof obj.prop2 === 'string'))
  );
}


class InternalOverrideClass implements OverrideClass {
  private constructor(private data: {
    prop1: string,
    prop2: string,
  }, private raw: OverrideClass) {}

  static from(data: OverrideClass): InternalOverrideClass {
    return new InternalOverrideClass({
      prop1: data.prop1,
      prop2: data.prop2,
    }, data);
  }

  get prop1(): string {
    return this.data.prop1;
  }
  get prop2(): string {
    return this.data.prop2;
  }


  toJSON(): string {
    return JSON.stringify(this.raw, null, 2);
  }
}

// Function to validate if an object is a TestClassAlias object
function isTestClassAlias(obj: any): obj is TestClassAlias {
  return (
    obj &&
    typeof obj === "object"
    && ("key" in obj && (typeof obj.key === 'string'))
    && ("key2" in obj && (typeof obj.key2 === 'string'))
    && ("key3" in obj && (typeof obj.key3 === 'string'))
    && ("key4" in obj && (typeof obj.key4 === 'string'))
    && ("key5" in obj && (typeof obj.key5 === 'string'))
  );
}


class InternalTestClassAlias implements TestClassAlias {
  private constructor(private data: {
    key: string,
    key2: string,
    key3: string,
    key4: string,
    key5: string,
  }, private raw: TestClassAlias) {}

  static from(data: TestClassAlias): InternalTestClassAlias {
    return new InternalTestClassAlias({
      key: data.key,
      key2: data.key2,
      key3: data.key3,
      key4: data.key4,
      key5: data.key5,
    }, data);
  }

  get key(): string {
    return this.data.key;
  }
  get key2(): string {
    return this.data.key2;
  }
  get key3(): string {
    return this.data.key3;
  }
  get key4(): string {
    return this.data.key4;
  }
  get key5(): string {
    return this.data.key5;
  }


  toJSON(): string {
    return JSON.stringify(this.raw, null, 2);
  }
}

// Function to validate if an object is a TestClassWithEnum object
function isTestClassWithEnum(obj: any): obj is TestClassWithEnum {
  return (
    obj &&
    typeof obj === "object"
    && ("prop1" in obj && (typeof obj.prop1 === 'string'))
    && ("prop2" in obj && (isEnumInClass(obj.prop2)))
  );
}


class InternalTestClassWithEnum implements TestClassWithEnum {
  private constructor(private data: {
    prop1: string,
    prop2: EnumInClass,
  }, private raw: TestClassWithEnum) {}

  static from(data: TestClassWithEnum): InternalTestClassWithEnum {
    return new InternalTestClassWithEnum({
      prop1: data.prop1,
      prop2: data.prop2,
    }, data);
  }

  get prop1(): string {
    return this.data.prop1;
  }
  get prop2(): EnumInClass {
    return this.data.prop2;
  }


  toJSON(): string {
    return JSON.stringify(this.raw, null, 2);
  }
}

// Function to validate if an object is a TestOutputClass object
function isTestOutputClass(obj: any): obj is TestOutputClass {
  return (
    obj &&
    typeof obj === "object"
    && ("prop1" in obj && (typeof obj.prop1 === 'string'))
    && ("prop2" in obj && (typeof obj.prop2 === 'number'))
  );
}


class InternalTestOutputClass implements TestOutputClass {
  private constructor(private data: {
    prop1: string,
    prop2: number,
  }, private raw: TestOutputClass) {}

  static from(data: TestOutputClass): InternalTestOutputClass {
    return new InternalTestOutputClass({
      prop1: data.prop1,
      prop2: data.prop2,
    }, data);
  }

  get prop1(): string {
    return this.data.prop1;
  }
  get prop2(): number {
    return this.data.prop2;
  }


  toJSON(): string {
    return JSON.stringify(this.raw, null, 2);
  }
}

// Function to validate if an object is a UnionTest_ReturnType object
function isUnionTest_ReturnType(obj: any): obj is UnionTest_ReturnType {
  return (
    obj &&
    typeof obj === "object"
    && ("prop1" in obj && ((typeof obj.prop1 === 'string') || (typeof obj.prop1 === 'boolean')))
    && ("prop2" in obj && (Array.isArray(obj.prop2) && obj.prop2.every((x: any) => (typeof x === 'number') || (typeof x === 'boolean'))))
    && ("prop3" in obj && ((Array.isArray(obj.prop3) && obj.prop3.every((x: any) => typeof x === 'number')) || (Array.isArray(obj.prop3) && obj.prop3.every((x: any) => typeof x === 'boolean'))))
  );
}


class InternalUnionTest_ReturnType implements UnionTest_ReturnType {
  private constructor(private data: {
    prop1: string | boolean,
    prop2: number | boolean[],
    prop3: number[] | boolean[],
  }, private raw: UnionTest_ReturnType) {}

  static from(data: UnionTest_ReturnType): InternalUnionTest_ReturnType {
    return new InternalUnionTest_ReturnType({
      prop1: ((x) => {
if (typeof x === 'string') {
  return x;
}
if (typeof x === 'boolean') {
  return x;
}
})(data.prop1),
      prop2: data.prop2.map(x => ((x) => {
if (typeof x === 'number') {
  return x;
}
if (typeof x === 'boolean') {
  return x;
}
})(x)),
      prop3: ((x) => {
if (Array.isArray(x) && x.every((x: any) => typeof x === 'number')) {
  return x.map(x => x);
}
if (Array.isArray(x) && x.every((x: any) => typeof x === 'boolean')) {
  return x.map(x => x);
}
})(data.prop3),
    }, data);
  }

  get prop1(): string | boolean {
    return this.data.prop1;
  }
  get prop2(): number | boolean[] {
    return this.data.prop2;
  }
  get prop3(): number[] | boolean[] {
    return this.data.prop3;
  }


  toJSON(): string {
    return JSON.stringify(this.raw, null, 2);
  }
}


export { InternalBlah, InternalClassOptionalFields, InternalClassOptionalOutput, InternalClassOptionalOutput2, InternalModifiedOutput, InternalNamedArgsSingleClass, InternalOptionalClass, InternalOptionalTest_Prop1, InternalOptionalTest_ReturnType, InternalOverrideClass, InternalTestClassAlias, InternalTestClassWithEnum, InternalTestOutputClass, InternalUnionTest_ReturnType }
