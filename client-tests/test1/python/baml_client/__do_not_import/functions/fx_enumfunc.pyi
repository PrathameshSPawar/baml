# This file is generated by the BAML compiler.
# Do not edit this file directly.
# Instead, edit the BAML files and recompile.

# ruff: noqa: E501,F401
# flake8: noqa: E501,F401
# pylint: disable=unused-import,line-too-long
# fmt: off

from ..types.enums.enm_categories import Categories
from typing import Protocol, runtime_checkable


import typing

import pytest
from contextlib import contextmanager
from unittest import mock

ImplName = typing.Literal["version"]

T = typing.TypeVar("T", bound=typing.Callable[..., typing.Any])
CLS = typing.TypeVar("CLS", bound=type)


IEnumFuncOutput = str

@runtime_checkable
class IEnumFunc(Protocol):
    """
    This is the interface for a function.

    Args:
        arg: Categories

    Returns:
        str
    """

    async def __call__(self, arg: Categories, /) -> str:
        ...


class BAMLEnumFuncImpl:
    async def run(self, arg: Categories, /) -> str:
        ...

class IBAMLEnumFunc:
    def register_impl(
        self, name: ImplName
    ) -> typing.Callable[[IEnumFunc], IEnumFunc]:
        ...

    async def __call__(self, arg: Categories, /) -> str:
        ...

    def get_impl(self, name: ImplName) -> BAMLEnumFuncImpl:
        ...

    @contextmanager
    def mock(self) -> typing.Generator[mock.AsyncMock, None, None]:
        """
        Utility for mocking the EnumFuncInterface.

        Usage:
            ```python
            # All implementations are mocked.

            async def test_logic() -> None:
                with baml.EnumFunc.mock() as mocked:
                    mocked.return_value = ...
                    result = await EnumFuncImpl(...)
                    assert mocked.called
            ```
        """
        ...

    @typing.overload
    def test(self, test_function: T) -> T:
        """
        Provides a pytest.mark.parametrize decorator to facilitate testing different implementations of
        the EnumFuncInterface.

        Args:
            test_function : T
                The test function to be decorated.

        Usage:
            ```python
            # All implementations will be tested.

            @baml.EnumFunc.test
            async def test_logic(EnumFuncImpl: IEnumFunc) -> None:
                result = await EnumFuncImpl(...)
            ```
        """
        ...

    @typing.overload
    def test(self, *, exclude_impl: typing.Iterable[ImplName]) -> pytest.MarkDecorator:
        """
        Provides a pytest.mark.parametrize decorator to facilitate testing different implementations of
        the EnumFuncInterface.

        Args:
            exclude_impl : Iterable[ImplName]
                The names of the implementations to exclude from testing.

        Usage:
            ```python
            # All implementations except "version" will be tested.

            @baml.EnumFunc.test(exclude_impl=["version"])
            async def test_logic(EnumFuncImpl: IEnumFunc) -> None:
                result = await EnumFuncImpl(...)
            ```
        """
        ...

    @typing.overload
    def test(self, test_class: typing.Type[CLS]) -> typing.Type[CLS]:
        """
        Provides a pytest.mark.parametrize decorator to facilitate testing different implementations of
        the EnumFuncInterface.

        Args:
            test_class : Type[CLS]
                The test class to be decorated.

        Usage:
        ```python
        # All implementations will be tested in every test method.

        @baml.EnumFunc.test
        class TestClass:
            def test_a(self, EnumFuncImpl: IEnumFunc) -> None:
                ...
            def test_b(self, EnumFuncImpl: IEnumFunc) -> None:
                ...
        ```
        """
        ...

BAMLEnumFunc: IBAMLEnumFunc