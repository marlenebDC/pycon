from typing import List

from conferences.models.conference import Conference
from pretix import get_items as _get_items
from pretix import get_user_orders as _get_user_orders

from .types import PretixOrder, TicketItem


def get_user_orders(conference, email):
    orders = _get_user_orders(conference, email)

    if orders["count"] == 0:
        return []

    items = _get_items(conference)
    return [PretixOrder(order, all_items=items) for order in orders["results"]]


def get_conference_tickets(conference: Conference, language: str) -> List["str"]:
    items = _get_items(conference)

    # TODO: we should probably use a category for this
    def _is_hotel(item: dict):
        return item.get("default_price") == "0.00"

    return [
        TicketItem(
            id=id,
            name=item["name"].get("language", item["name"]["en"]),
            description=(
                item["description"].get(language, item["description"]["en"])
                if item["description"]
                else None
            ),
            active=item["active"],
            default_price=item["default_price"],
            available_from=item["available_from"],
            available_until=item["available_until"],
        )
        for id, item in items.items()
        if item["active"] and not _is_hotel(item)
    ]
