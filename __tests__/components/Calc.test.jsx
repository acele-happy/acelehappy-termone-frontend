import React from "react";
import renderer from "react-test-renderer"
import {expect, test} from "vitest"
import Calc from "../../src/components/Calc";

function toJson(component){
    const result = component.toJSON()
    expect(result).toBeDefined()
    expect(result).toBeInstanceOf(Array)
    return result
}

test('Calc Testing', () => {
    const component = renderer.create(
      <Calc />
    );

    let tree = toJson(component)
    expect(tree.type).toStrictEqual('div')
    expect(tree.children).toStrictEqual('div')
  })