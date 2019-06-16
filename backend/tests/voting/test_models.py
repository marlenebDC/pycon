from pytest import raises, mark
from django.core import exceptions


@mark.django_db
def test_range_first_cannot_be_greater_than_last(vote_range_factory):
    vote_range = vote_range_factory(
        first=10,
        last=1
    )

    with raises(exceptions.ValidationError) as e:
        vote_range.clean()

    assert 'First vote cannot be greater then the last' in str(e.value)


@mark.django_db
def test_step_range_cannot_be_less_than_zero(vote_range_factory):
    vote_range = vote_range_factory(
        step=-1
    )

    with raises(exceptions.ValidationError) as e:
        vote_range.clean()

    assert 'Step cannot be less than zero' in str(e.value)
