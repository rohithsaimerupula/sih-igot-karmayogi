def calculate_recommendation_score(
    gap_match: float,
    level_fit: float,
    duration_fit: float,
    evidence_fit: float,
    language_fit: float,
    freshness: float
) -> float:
    """
    SIH Exact Mathematical Specification:
    score = 0.40*gap_match + 0.20*level_fit + 0.15*duration_fit + 0.10*evidence_fit + 0.10*language_fit + 0.05*freshness
    """
    return (
        (0.40 * gap_match) +
        (0.20 * level_fit) +
        (0.15 * duration_fit) +
        (0.10 * evidence_fit) +
        (0.10 * language_fit) +
        (0.05 * freshness)
    )

def compute_gap(target: float, actual: float, weight: float = 1.0) -> float:
    raw_gap = max(0.0, target - actual)
    return round(raw_gap * weight, 2)

def get_priority(gap: float) -> str:
    if gap >= 2.0:
        return "Critical"
    elif gap >= 1.0:
        return "High"
    elif gap >= 0.4:
        return "Medium"
    return "Low"
