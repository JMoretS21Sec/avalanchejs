import { getAvalanche, createTests, Matcher } from "./e2etestlib"

import { HealthAPI } from "../src/apis/health/api"

describe("Info", () => {
  const avalanche = getAvalanche()
  const health: HealthAPI = avalanche.Health()

  // test_name          response_promise               resp_fn                 matcher           expected_value/obtained_value
  const tests_spec: any = [
    [
      "getLiveness",
      () => health.getLiveness(),
      (x) => {
        return x.healthy
      },
      Matcher.toBe,
      () => true
    ]
  ]

  createTests(tests_spec)
})
