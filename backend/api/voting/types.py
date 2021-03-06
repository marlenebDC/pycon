from enum import Enum
from typing import TYPE_CHECKING

import strawberry
from api.users.types import User

if TYPE_CHECKING:  # pragma: no cover
    from api.submissions.types import Submission


@strawberry.enum
class VoteValues(Enum):
    NOT_INTERESTED = 0
    MAYBE = 1
    WANT_TO_SEE = 2
    MUST_SEE = 3

    @classmethod
    def from_int(cls, value: int):
        for _, member in cls.__members__.items():
            if member.value == value:
                return member

        return None


@strawberry.type
class VoteType:
    id: strawberry.ID
    value: int
    user: User
    submission: "Submission"
