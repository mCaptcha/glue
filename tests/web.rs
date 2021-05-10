//! Test suite for the Web and headless browsers.

#![cfg(target_arch = "wasm32")]

extern crate wasm_bindgen_test;
use wasm_bindgen_test::*;

wasm_bindgen_test_configure!(run_in_browser);

#[wasm_bindgen_test]
fn it_works() {
    use mcaptcha_browser::*;
    let payload = gen_pow(500, "MFsqLMZId629Dh2hrtux2Qdn3gBzCaSt".into());
    assert_eq!(
        "{\"nonce\":312,\"result\":\"340175381422106372296624206295814425082\",\"_spook\":null}",
        &payload
    );

    let payload = gen_pow(1_000, "MFsqLMZId629Dh2hrtux2Qdn3gBzCaSt".into());
    assert_eq!(
        "{\"nonce\":312,\"result\":\"340175381422106372296624206295814425082\",\"_spook\":null}",
        &payload
    );

    let payload = gen_pow(2_000, "MFsqLMZId629Dh2hrtux2Qdn3gBzCaSt".into());
    assert_eq!(
        &payload,
        "{\"nonce\":312,\"result\":\"340175381422106372296624206295814425082\",\"_spook\":null}"
    );

    let payload = gen_pow(100_000, "MFsqLMZId629Dh2hrtux2Qdn3gBzCaSt".into());
    assert_eq!(
        &payload,
        "{\"nonce\":59930,\"result\":\"340281433562218714678373578791487113813\",\"_spook\":null}"
    );

    let payload = gen_pow(1_000_000, "MFsqLMZId629Dh2hrtux2Qdn3gBzCaSt".into());

    assert_eq!(&payload,"{\"nonce\":1902451,\"result\":\"340282308726676882310449308394036800665\",\"_spook\":null}");
}
