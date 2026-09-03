from services.api.engine.gap_engine import calculate_recommendation_score, compute_gap

def test_gap_engine_perfect_match():
    score = calculate_recommendation_score(1.0, 1.0, 1.0, 1.0, 1.0, 1.0)
    assert abs(score - 1.0) < 1e-6

def test_gap_engine_partial_match():
    score = calculate_recommendation_score(0.5, 0.8, 0.2, 0.9, 1.0, 0.5)
    expected = (0.40*0.5) + (0.20*0.8) + (0.15*0.2) + (0.10*0.9) + (0.10*1.0) + (0.05*0.5)
    assert abs(score - expected) < 1e-6

def test_compute_gap():
    gap = compute_gap(4.0, 2.1, 1.0)
    assert gap == 1.9

if __name__ == "__main__":
    test_gap_engine_perfect_match()
    test_gap_engine_partial_match()
    test_compute_gap()
    print("ALL TEST CASES PASSED SUCCESSFULLY!")
