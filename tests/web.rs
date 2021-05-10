//! Test suite for the Web and headless browsers.

#![cfg(target_arch = "wasm32")]

extern crate wasm_bindgen_test;
use wasm_bindgen_test::*;

wasm_bindgen_test_configure!(run_in_browser);

#[wasm_bindgen_test]
fn pow_generation_works() {
    use mcaptcha_browser::*;
    use pow_sha256::*;

    const SALT: &str = "yrandomsaltisnotlongenoug";
    const PHRASE: &str = "ironmansucks";
    const DIFFICULTY: u32 = 1000;
    let serialised_work = gen_pow(SALT.into(), PHRASE.into(), DIFFICULTY);

    let work: Work = serde_json::from_str(&serialised_work).unwrap();

    let work = PoWBuilder::default()
        .result(work.result)
        .nonce(work.nonce)
        .build()
        .unwrap();

    let config = ConfigBuilder::default().salt(SALT.into()).build().unwrap();
    assert!(config.is_valid_proof(&work, &PHRASE.to_string()));
    assert!(config.is_sufficient_difficulty(&work, DIFFICULTY));
}
